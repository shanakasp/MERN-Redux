import { Button, Collapse } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../MainScreen";

const MyNotes = () => {
  const [openNoteId, setOpenNoteId] = useState(null);
  const [notes, setNotes] = useState([]);

  const deleteHandler = (_id) => {
    if (window.confirm("Are you sure you want to delete")) {
      // Add logic here to delete the note
    }
  };

  const handleNoteClick = (_id) => {
    setOpenNoteId(openNoteId === _id ? null : _id);
  };

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/notes");
      setNotes(response.data); // Update the notes state with response.data
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  console.log(notes);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back">
      <Button
        style={{
          backgroundColor: "#1976d2",
          color: "white",
          borderRadius: "4px",
          padding: "10px 20px",
          fontSize: "13px",
          margin: "10px",
        }}
      >
        Create New Note
      </Button>

      <div className="Cardcomponents">
        {notes.map((note, index) => (
          <Card
            key={note._id}
            style={{
              marginBottom: index !== notes.length - 1 ? "20px" : 0,
              cursor: "pointer",
            }}
          >
            <Card.Header
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => handleNoteClick(note._id)}
            >
              <span>{note.title}</span>
              <div className="buttons">
                <Link to={`/note/${note._id}`}>
                  <button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      borderRadius: "4px",
                      padding: "8px 16px",
                      fontSize: "13px",
                      margin: "0 5px",
                    }}
                  >
                    Edit
                  </button>
                </Link>
                <Button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "4px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    margin: "0 5px",
                  }}
                  variant="contained"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Collapse in={openNoteId === note._id}>
              <Card.Body>
                <h4>
                  <Badge className="mb-2" variant="secondary">
                    Category - {note.category}
                  </Badge>
                </h4>
                <Card.Text>{note.content}</Card.Text>
                <Card.Footer>Created On -Date</Card.Footer>
              </Card.Body>
            </Collapse>
          </Card>
        ))}
      </div>
    </MainScreen>
  );
};

export default MyNotes;
