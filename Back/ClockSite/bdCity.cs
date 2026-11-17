using clockSite.modelStorge
using Microsoft.EntityFrameworkCore;

namespace clockSite.bdCity
public class AnnouncementСities : DbContext{
    public AnnouncementСities(DbContextOptions<AnnouncementСities> options) : base(options) { }
    public DbSet<City> Cities => Set<City>();
    protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<City>().HasData(
            new City { Id = 1, Name = "Минск", TimeZoneId = "Europe/Minsk" },
            new City { Id = 2, Name = "Нью-Йорк", TimeZoneId = "America/New_York" },
            new City { Id = 3, Name = "Токио", TimeZoneId = "Asia/Tokyo" }
        );

        }
}