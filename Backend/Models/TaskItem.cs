﻿namespace taskmanagement.Models
{
    public class TaskItem
    {
        public int Id { get; set; }  // Primary Key
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime? DueDate { get; set; }
        public bool IsCompleted { get; set; } = false;
    }
}
