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
        public ActionResult<Genre> Get()
        {
            return repository.GetAllGenres();
        }

        [HttpGet("{id:int}/{param2=felipe}")]
        public ActionResult<Genre> Get(int id, string param2)
        {
            var genre = repository.GetGenreById(id);

            if(genre == null)
            {
                return NotFound();
            }

            return genre;
        }

        [HttpPost]
        public ActionResult Post()
        {
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put()
        {
            return NoContent();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();
        }
    }
}
