import {
  CheckBox,
  ColorLens,
  Delete,
  DragIndicator,
  Edit,
} from "@mui/icons-material";
import { Box, Card, CardActions, IconButton, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";

export default function Task({
  name,
  id,
  index,
}: {
  name: string;
  id: number;
  index: number;
}) {
  return (
    <Draggable draggableId={"drag" + id.toString()} index={index} key={id}>
      {(provided, snapshot) => (
        <Card
          sx={{
            padding: 3,
            display: "flex",
            alignItems: "center",
            width: 600,
            my: 2,
            sm: {
              width: 400,
            },
          }}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Box {...provided.dragHandleProps}>
            <DragIndicator fontSize="large" />
          </Box>
          <CardActions
            sx={{ display: "flex", alignItems: "center", width: "100%" }}
          >
            <Typography fontWeight="bold" fontSize={20}>
              {name}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton>
              <Edit />
            </IconButton>
            <IconButton>
              <ColorLens />
            </IconButton>
            <IconButton>
              <CheckBox />
            </IconButton>
            <IconButton>
              <Delete />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </Draggable>
  );
}
