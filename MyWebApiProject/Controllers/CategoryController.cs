using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyWebApiProject.Controllers
{
        [Route("api/[controller]")]
        [ApiController]
public class CategoryController : ControllerBase
{
    private readonly YourDbContext _context;

    public CategoryController(YourDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var categories = _context.Categories.ToList();
        return Ok(categories);
    }

    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        var category = _context.Categories.FirstOrDefault(c => c.Id == id);
        if (category == null)
            return NotFound();

        return Ok(category);
    }

    // Similar to ProductsController, implement Post, Put, and Delete methods here
}

    }
