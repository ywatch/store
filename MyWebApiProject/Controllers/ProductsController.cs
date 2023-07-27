using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyWebApiProject.Controllers
{
[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly YourDbContext _context;

    public ProductsController(YourDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var products = _context.Products.ToList();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        var product = _context.Products.FirstOrDefault(p => p.Id == id);
        if (product == null)
            return NotFound();

        return Ok(product);
    }

    [HttpPost]
    public IActionResult Post([FromBody] Product product)
    {
        _context.Products.Add(product);
        _context.SaveChanges();

        return CreatedAtAction(nameof(Get), new { id = product.Id }, product);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] Product updatedProduct)
    {
        var product = _context.Products.FirstOrDefault(p => p.Id == id);
        if (product == null)
            return NotFound();

        product.Title = updatedProduct.Title;
        product.Image = updatedProduct.Image;
        product.Category = updatedProduct.Category;
        product.Price = updatedProduct.Price;
        product.Description = updatedProduct.Description;

        _context.SaveChanges();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var product = _context.Products.FirstOrDefault(p => p.Id == id);
        if (product == null)
            return NotFound();

        _context.Products.Remove(product);
        _context.SaveChanges();

        return NoContent();
    }
}

}