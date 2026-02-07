using BusinessLogic;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("Note")]
    public class NoteController(INoteService noteService) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> CreateAsync(string text)
        {
            await noteService.CreateAsync(text);
            return NoContent();
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetNoteAsync([FromRoute]int id)
        {
            var result = await noteService.GetByIdAsync(id);

            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken ct)
        {
            var notes = await noteService.GetAllAsync(ct);

            return Ok(notes);
        }


        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateNoteAsync([FromRoute] int id , string newText)
        {
            await noteService.UpdateAsync(id, newText);

            return NoContent();
        }


        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteNoteAsync([FromRoute] int id)
        {
            await noteService.DeleteAsync(id);

            return NoContent();
        }
    }
}
