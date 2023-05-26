import React from 'react';
import FormFields from './FormFields.js';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Form() {
  return (
    <div class = "form_container">
        <h1 class="mb-4">New Console</h1>
        <form action = "/" method="POST">
            <FormFields/>
        </form>
    </div>
    
  )
}
