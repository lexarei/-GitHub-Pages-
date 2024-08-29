document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Сбор данных формы
    const formData = new FormData(this);
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Пример обработки данных
    console.log('Данные формы:', data);

    // Здесь можно отправить данные на сервер или выполнить другие действия
    alert('Данные сохранены!');
});
