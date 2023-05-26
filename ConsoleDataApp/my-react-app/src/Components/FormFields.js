import React from 'react'
import './FormFields.css'
import 'bootstrap/dist/css/bootstrap.min.css'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>


export default function FormFields() {
  return (
    <>
    <div class="form-group">
    <label for="console">Console</label>
    <input required type="text" name="console" id="console" class="form-control"></input>
    </div>
    <div class="form-group">
    <label for="year">Year</label>
    <input required type="text" name="year" id="year" class="form-control"></input>
    </div>
    <div class="form-group">
    <label for="description">Description</label>
    <textarea required type="text" name="description" id="description" class="form-control"></textarea>
    </div>
    <div class="form-group">
    <label for="image">Image Link</label>
    <input required type="text" name="image" id="image" class="form-control"></input>
    </div>
    <div class="form-group">
    <label for="information">Link To More Info</label>
    <input required type="text" name="information" id="information" class="form-control"></input>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
    </>



  )
}

