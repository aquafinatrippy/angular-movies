using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using moviesApi.Services;
using moviesApi.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

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
        public async Task<ActionResult<List<Genre>>> Get()
        {
            return await repository.GetAllGenres();
        }

        [HttpGet("{id:int}")]
        public ActionResult<Genre> Get([BindRequired] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

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
