using DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    internal class NoteService(INoteRepository noteRepository) : INoteService
    {
        public async Task CreateAsync(string text, CancellationToken cancellationToken = default)
        {
            var note = new Note
            {
                Text = text
            };

            await noteRepository.CreateAsync(note , cancellationToken);
        }


        public async Task<string> GetByIdAsync(int id, CancellationToken cancellationToken = default)
        {
            var note = await noteRepository.GetByIdAsync(id, cancellationToken);

            if(note is null)
            {
                throw new Exception("Note not found");
            }

            return note.Text;
        }

        public async Task<List<Note>> GetAllAsync(CancellationToken cancellationToken = default)
        {
            return await noteRepository.GetAllAsync(cancellationToken);
        }

        public async Task UpdateAsync(int id, string newText, CancellationToken cancellationToken = default)
        {
            var note = await noteRepository.GetByIdAsync(id, cancellationToken);
            if(note is null)
            {
                throw new Exception("Note not found");
            }

            note.Text = newText;

            noteRepository.UpdateAsync(note , cancellationToken );
        }

        public async Task DeleteAsync(int id, CancellationToken cancellationToken = default)
        {
            var note = await noteRepository.GetByIdAsync(id, cancellationToken);
            if (note is null)
            {
                throw new Exception("Note not found");
            }

            noteRepository.DeleteAsync(note , cancellationToken );
        }
    }
}
