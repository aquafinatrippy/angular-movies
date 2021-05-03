using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using moviesApi.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;

namespace moviesApi.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController: ControllerBase
    {
       
        private readonly ILogger<GenresController> logger;
        public GenresController(ILogger<GenresController> logger)
        {
            
            this.logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<List<Genre>>> Get()
        {
            logger.LogInformation("getting all the genres");
            return new List<Genre>()
            {
                new Genre(){Id = 1, Name = "test"}
            };
           
        }

        [HttpGet("{id:int}")]
        public ActionResult<Genre> Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {

            throw new NotImplementedException();

        }

        [HttpPut]
        public ActionResult Put([FromBody] Genre genre)
        {

            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();
        }
    }
}
