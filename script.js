document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resume-form');
    const preview = document.getElementById('preview');
    const previewContent = document.getElementById('preview-content');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const experience = document.getElementById('experience').value;
      const education = document.getElementById('education').value;
  
      const resumeHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Education</h4>
        <p>${education}</p>
      `;
  
      previewContent.innerHTML = resumeHTML;
      preview.classList.remove('hidden');
    });
  });
  