import React from 'react';
import {useState, useEffect} from 'react';
import $ from 'jquery'; // Import jQuery



function CSRFToken() {
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        // Obter o token CSRF do backend
        fetch('http://localhost:8000/get_csrf_token/')  // Rota para obter o token CSRF do backend
        .then((response) => response.json())
        .then((data) => {
            setCsrfToken(data.csrfToken);  // Definir o token CSRF no estado
        })
        .catch((error) => {
            console.error('Erro ao obter o token CSRF:', error);
        });
    }, []);

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim(); // Utilizando o método trim para remover espaços em branco
            if (cookie.substring(0, name.length + 1) === name + '=') {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
            }
          }
        }
        return cookieValue;
      }

    const csrftoken = getCookie('csrftoken');

    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};
export default CSRFToken;