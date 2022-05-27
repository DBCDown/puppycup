import Layout from '../components/template/Layout'
import { Controls, Player } from '@lottiefiles/react-lottie-player'

export default function FourOFour() {
  return (
    <Layout>
      <div className="center space-y-10">
        <Player autoplay loop src="./lottie.json" style={{ height: '600px', width: '600px' }}>
          {/*<Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />*/}
        </Player>
      </div>
    </Layout>
  )
}
