import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import "./App.css";
const API_KEY = "rjzemys4gs8v";
const filters = { type: "messaging" };
const options = { state: true, presence: true, limit: 10 };
const sort = { last_message_at: -1 };

const client = StreamChat.getInstance(API_KEY);

const CustomList = (props) => {
  return (
    <div className="testing">
      <p>Hello Man!</p>
      <div>{props.children}</div>
    </div>
  );
};

const App = () => {
  const [clientReady, setClientReady] = useState(false);
  const userTokens = {
    lihan:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibGloYW4tb25nIn0.fwI1igMo4QLR97w1HxDa3q20FJ5DAlB3W1MuXzBSKoI",
    yihein:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoieWloZWluLWNoYWkifQ.hBozcKMm790m74DoJCqaCR_Q3n589F4Bp7nAzobiI4g",
  };

  useEffect(() => {
    const setupClient = async () => {
      try {
        await client.connectUser(
          {
            id: "yihein-chai",
            name: "Yi Hein Chai",
          },
          userTokens.yihein
        );

        setClientReady(true);
      } catch (err) {
        console.log(err);
      }
    };

    setupClient();
  }, []);

  if (!clientReady) return null;

  return (
    <Chat client={client}>
      <ChannelList List={CustomList} filters={filters} sort={sort} options={options} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;
