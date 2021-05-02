using moviesApi.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace moviesApi.Entities
{
    public class Genre
    {
        public int id { get; set; }
        [Required(ErrorMessage = "The field with name {0} is required")]
        [StringLength(10)]
        [FirstLetterToUppercase]
        public string name { get; set; }

    }
}
