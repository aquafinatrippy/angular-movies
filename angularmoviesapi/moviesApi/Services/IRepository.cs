using moviesApi.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moviesApi.Services
{
    public interface IRepository
    {
        List<Genre> GetAllGenres();
        Genre GetGenreById(int id);
    }
}
