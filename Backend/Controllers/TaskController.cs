using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using taskmanagement.Data;
using taskmanagement.Models;

namespace taskmanagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController:ControllerBase
    {
        public readonly AppDbContext _context;

        public TaskController(AppDbContext context)
        {
            _context = context;
        }

        // getAPI task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskItem>>> getTasks()
        {
            return await _context.TaskItems.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItem>> GetTask(int id)
        {
            var task = await _context.TaskItems.FindAsync(id);

            if (task == null)
                return NotFound();

            return task;
        }
        [HttpPost]
        public async Task<ActionResult<TaskItem>> PostTask(TaskItem task)
        {
            _context.TaskItems.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTask), new { id = task.Id }, task);
        }

        // PUT: api/tasks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTask(int id, TaskItem task)
        {
            if (id != task.Id)
                return BadRequest();

            _context.Entry(task).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.TaskItems.Any(t => t.Id == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/tasks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var task = await _context.TaskItems.FindAsync(id);
            if (task == null)
                return NotFound();

            _context.TaskItems.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
