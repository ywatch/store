public class Product
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Image { get; set; }
    public string Category { get; set; }
    public decimal Price { get; set; }
    public string Description { get; set; }
}

public class Category
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Image { get; set; }
}

public class User
{
    public int Id { get; set; }
    public string FullName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
}

public class LoginModel
{
    public string email { get; set; }
    public string password { get; set; }
}
