import { JaaSMeeting } from '@jitsi/react-sdk';

const JAAS_MEETING_APP_ID = import.meta.env.VITE_JAAS_MEETING_APP_ID;
const JAAS_MEETING_ROOM_NAME = 'React PWA Jitsi Proof of concept';

const App: React.FC = (): React.ReactElement => {
  /*
  * Handlers
  **/

  const onGetJaaSMeetingIFrameRef = (node: HTMLDivElement) => {
    node.style.height = '100vh';
  };

  const onJaaSMeetingReadyToClose = () => {
    window.location.reload();
  };

  /*
  * Render
  **/

  return (
    <JaaSMeeting
      appId={JAAS_MEETING_APP_ID}
      roomName={JAAS_MEETING_ROOM_NAME}
      getIFrameRef={onGetJaaSMeetingIFrameRef}
      onReadyToClose={onJaaSMeetingReadyToClose}
    />
  );
}

export default App;
