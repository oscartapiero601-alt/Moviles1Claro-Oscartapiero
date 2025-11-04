const URL="https://eegjtosayijnxuceduiq.supabase.co/rest/v1/usuario";
const API_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlZ2p0b3NheWlqbnh1Y2VkdWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzg0MDcsImV4cCI6MjA3Nzg1NDQwN30.jyBHTiRdJebpTbCO1cXZLnVuGxAPg5fl1ODJZLW0xuo';
//1.OBTENER TODOS LOS USUARIOS DE LA TABLA USUARIOS
console.log('Procesando punto 1. Obteniendo todos los datos de la tabla usuarios>>>...');
fetch(URL,{headers:{'apikey':API_KEY}})//fecth  hace  una peticion HTTP a la url de nuestro supabase enviando tambien la clave de lectura 
.then(r=>r.json())
.then(data=>console.log('Todos los datos de usuarios esta asi:',data));

// 2. SELECCIONAR USUARIO ID 3
console.log('\n=== 2. SELECCIONAR USUARIO ID 3 ===');
fetch(URL +'?id_usuarios=eq.3', { // Agrega filtro ?id_usuarios=eq.3 para buscar solo ID 3
headers: {'apikey': API_KEY}
})
.then(r => r.json()) // 'r' = response (respuesta del servidor)
.then(data => console.log('Usuario ID 3:', data)); // 'data' datos del usuario
// 3. INSERTAR NUEVO USUARIO
console.log('\n=== 3. INSERTAR NUEVO USUARIO ===');
fetch(URL, {
method: 'POST', // POST Crear nuevo registro
headers: {
'apikey': API_KEY,
'Content-Type': 'application/json' // Indica que enviamos datos JSON
},
body: JSON.stringify({"nombre": "Juan", "identificacion": "1234"}) // Convierte objeto a texto JSON
})
.then(r => r.json()) // 'r' respuesta del servidor después del INSERT
.then(data => console.log('Usuario insertado:', data)); // 'data' datos del usuario creado