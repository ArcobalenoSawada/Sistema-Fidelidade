document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const agencyName = document.getElementById('agency-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (agencyName && email && phone) {
        alert(`Agência ${agencyName} cadastrada com sucesso!`);
        // Aqui você pode adicionar o código para enviar os dados para o servidor
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
