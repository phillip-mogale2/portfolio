const supabaseUrl = 'https://almskyyxefcmuiyxjunf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsbXNreXl4ZWZjbXVpeXhqdW5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5ODgxNTcsImV4cCI6MjA2NzU2NDE1N30.gEOmibkpEGujYO3vpTszCLuyqINydp6YpWcUe-c1K5A';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('main-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const userMessage = document.getElementById('message-input').value;
    
    const statusElement = document.getElementById('statusMessage');
    statusElement.classList.add('hidden');
    
    try {
        const { data, error } = await supabase.from('portfolio')
        .insert([
            {
                name: name,
                email: email,
                message: userMessage,
                created_at: new Date().toISOString()
            }
        ]);
        
        if (error) {
            throw error;
        }
        
        statusElement.textContent = 'Message sent successfully!';
        statusElement.className = 'success';
        statusElement.classList.remove('hidden');
        
        console.log('Inserted data:', data);
        document.getElementById('main-form').reset();

        setTimeout(() => {
            statusElement.classList.add('hidden');
        }, 3000);
    } catch (error) {
        statusElement.textContent = `Error: ${error.message}`;
        statusElement.className = 'error';
        statusElement.classList.remove('hidden');
        console.error('Error occured, coudnt send message');
    }
});