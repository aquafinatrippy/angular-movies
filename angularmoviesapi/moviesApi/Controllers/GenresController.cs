using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using moviesApi.Services;
using moviesApi.Entities;
using Microsoft.AspNetCore.Mvc;

namespace moviesApi.Controllers
{
    [Route("api/genres")]
    public class GenresController: ControllerBase
    {
        private readonly IRepository repository;
        public GenresController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        [HttpGet("list")]
        [HttpGet("/allgenres")]
        public List<Genre> Get()
        {
            return repository.GetAllGenres();
        }

        [HttpGet("{id}/{param2=felipe}")]
        public Genre Get(int id, string param2)
        {
            var genre = repository.GetGenreById(id);

            if(genre == null)
            {
                //return NotFound();
            }

            return genre;
        }

        [HttpPost]
        public void Post()
        {

        }

        [HttpPut]
        public void Put()
        {

        }

        [HttpDelete]
        public void Delete()
        {

        }
    }
}
