using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using moviesApi.Services;

namespace moviesApi.Controllers
{
    public class GenresController
    {
        private readonly IRepository repository;
        public GenresController(IRepository repository)
        {
            this.repository = repository;
        }
    }
}
