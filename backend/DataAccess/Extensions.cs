using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public static class Extensions
    {
        //Integration of the data layer into the Inversion of Control Container (IoC Container)
        //is implemented through the Extension Method pattern
        public static IServiceCollection AddDataAccess (this IServiceCollection serviceCollection)
        {
            //serviceCollection.AddScoped<INoteRepository, NoteRepository>();
            serviceCollection.AddDbContext<AppContext>(x =>
            {
                x.UseNpgsql("Host=localhost;Database=NoteDb;Username=postgres;Password=1234");
            });

            serviceCollection.AddScoped<INoteRepository, NoteRepository>();

            return serviceCollection;
        }
    }
}
