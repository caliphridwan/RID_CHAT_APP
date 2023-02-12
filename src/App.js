import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  return(
    <ChatEngine
      height="100vh"
      projectID="b266330b-22f5-483c-8570-96761d74a864"
      userName="Riddy"
      userSecret="Olatunde793#"
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState}/>}
       //renderChatFeed={(chatAppProps)=>{ return <ChatFeed {...chatAppProps}/>}}
     />
  
  );
}

export default App;
