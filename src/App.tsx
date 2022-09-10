import { JaaSMeeting } from '@jitsi/react-sdk';

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
      appId={import.meta.env.VITE_JAAS_MEETING_APP_ID}
      roomName='React PWA Jitsi Proof of concept'
      getIFrameRef={onGetJaaSMeetingIFrameRef}
      onReadyToClose={onJaaSMeetingReadyToClose}
    />
  );
}

export default App;
