using Microsoft.EntityFrameworkCore;
using System.Globalization;
using taskmanagement.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer(); // required for Swagger
builder.Services.AddSwaggerGen();           // required for Swagger

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

var app = builder.Build();

// Set culture
//var cultureInfo = new CultureInfo("en-US");
//CultureInfo.DefaultThreadCurrentCulture = cultureInfo;
//CultureInfo.DefaultThreadCurrentUICulture = cultureInfo;

// Enable Swagger in dev mode
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(); // optional: customize endpoint here
}
app.UseCors("AllowReactApp");

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
