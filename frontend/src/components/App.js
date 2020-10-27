import React from 'react';
import { Grid } from '@material-ui/core';
import { ConversationList } from './conversations/ConversationList';


function App() {
  return (
      <div>
          <Grid container justify="center">
              <Grid
                  container
                  alignItems="center"
                  justify="center"
              >
                  <ConversationList/>
              </Grid>
          </Grid>
      </div>
);
}

export default App;
