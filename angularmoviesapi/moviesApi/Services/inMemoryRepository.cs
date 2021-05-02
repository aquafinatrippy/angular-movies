using Microsoft.Extensions.Logging;
using moviesApi.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moviesApi.Services
{
    public class InMemoryRepository: IRepository
    {
        private List<Genre> _genres;
        private readonly ILogger<InMemoryRepository> logger;
        public InMemoryRepository(ILogger<InMemoryRepository> logger)

        {
            this.logger = logger;
            _genres = new List<Genre>()
            {
                new Genre() { id = 1, name = "comedy" },
                new Genre() { id = 2, name = "horror" }
            };
        }

        public async Task<List<Genre>> GetAllGenres()
        {
            logger.LogInformation("executing getall");
            await Task.Delay(1);
            return _genres;
        }

        public Genre GetGenreById(int id)
        {
            return _genres.FirstOrDefault(x => x.id == id);
        }

        public void AddGenre(Genre genre)
        {
            genre.id = _genres.Max(x => x.id) + 1;
            _genres.Add(genre);
        }
    }
}
