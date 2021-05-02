using moviesApi.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moviesApi.Services
{
    public class inMemoryRepository: IRepository
    {
        private List<Genre> _genres;
        public inMemoryRepository()

        {
            _genres = new List<Genre>()
            {
                new Genre() { id = 1, name = "comedy" },
                new Genre() { id = 2, name = "horror" }
            };
        }

        public async Task<List<Genre>> GetAllGenres()
        {
            await Task.Delay(1);
            return _genres;
        }

        public Genre GetGenreById(int id)
        {
            return _genres.FirstOrDefault(x => x.id == id);
        }
    }
}
