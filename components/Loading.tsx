import ContentLoader from 'react-content-loader'

const Loading = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
      <div>
        <img 
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" 
          alt="" 
          style={{marginBottom: 10}}
          height={150}
        />
      </div>
      <div>
        <ContentLoader
          viewBox="0 0 400 160"
          height={160}
          width={400}
          backgroundColor="transparent"
        >
          <circle cx="150" cy="86" r="8" />
          <circle cx="194" cy="86" r="8" />
          <circle cx="238" cy="86" r="8" />
        </ContentLoader>
      </div>
    </div>
  )
}

export default Loading