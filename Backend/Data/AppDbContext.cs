using Microsoft.EntityFrameworkCore;
using taskmanagement.Models;

namespace taskmanagement.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<TaskItem> TaskItems { get; set; }
    }
}
