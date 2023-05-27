import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import MyLocationIcon from '@mui/icons-material/MyLocation';
function BidForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasiclocation">
        <Form.Label>location</Form.Label>
        <Form.Control type="location" placeholder="location" />
        <IconButton aria-label="myLocation" size="large">
          <MyLocationIcon fontSize="inherit" />
        </IconButton>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCategory">
      <DropdownButton
        as={ButtonGroup}
        title="Category"
        id="bg-vertical-dropdown-2"
        variant="outline-secondary"
        >
        <Dropdown.Item eventKey="1">Electrician</Dropdown.Item>
        <Dropdown.Item eventKey="2">Carpanter</Dropdown.Item>
      </DropdownButton>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Task description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="flat"
              name="group1"
              type={type}
              color="dark"
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="bid"
              name="group1"
              type={type}
              color="dark"
              id={`inline-${type}-2`}
            />
          </div>
        ))}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <TextField
          label="Amount"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">RS</InputAdornment>,
          }}
        />
      </Form.Group>

      <Button variant="outline-dark" size="lg" type="submit">
        find your tasker
      </Button>
    </Form>
  );
}

export default BidForm;