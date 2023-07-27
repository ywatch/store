using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyWebApiProject.Controllers
{
  
        [Route("api/[controller]")]
    [ApiController]
public class UserController : ControllerBase
{
    private readonly YourDbContext _context;

    public UserController(YourDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var users = _context.Users.ToList();
        return Ok(users);
    }

    [HttpPost("login")]
    public IActionResult Post1([FromBody] LoginModel loginModel)
    {
        var user = _context.Users.FirstOrDefault(u =>  u.Email == loginModel.email && u.Password == loginModel.password);
        if (user == null)
            return NotFound();

        return Ok(user);
    }

    [HttpPost]
    public IActionResult Post([FromBody] User user)
    {
        _context.Users.Add(user);
        _context.SaveChanges();

        return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var user = _context.Users.FirstOrDefault(p => p.Id == id);
        if (user == null)
            return NotFound();

        _context.Users.Remove(user);
        _context.SaveChanges();

        return NoContent();
    }

    // UserController can have Put and Delete methods similar to the other controllers
}

    }
