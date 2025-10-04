import Object from './Object'

const HeaderCard = () => {
  return (
    <div className="cardWrapper">
      <div className="headerCard">
        <div className="navbar">
          <div>
            <div className="redDot dot"></div>
            <div className="yellowDot dot"></div>
            <div className="greenDot dot"></div>
          </div>
          <p className="fileTextColor">me.js</p>
        </div>

        <div className="code code--full">
          <span className="comment">// Some relevant info</span> <br />
          <div>
            <span className="keyword">const</span>{' '}
            <span className="variable">myInfo</span>{' '}
            <span className="operator">=</span>{' '}
            <span className="brace">{'{'}</span>
            <div className="objects">
              <Object object="name" description="Alonso" comma={true} />
              <Object object="isStudent" description="true" comma={true} />
              <Object
                object="favoriteRole"
                description="Frontend Developer"
                comma={true}
              />
              <Object
                object="focuses"
                description={['web-dev', 'mobile', 'design']}
                comma={true}
              />
              <Object object="favoriteFood" description="pasta" comma={true} />
              <Object
                object="hobbies"
                description={['running', 'cooking', 'coding']}
                comma={false}
              />
            </div>
            <span className="brace">{'}'}</span>
          </div>
        </div>

        <div className="code code--compact">
          <span className="comment">// About me</span> <br />
          <div>
            <span className="keyword">const</span>{' '}
            <span className="variable">me</span>{' '}
            <span className="operator">=</span>{' '}
            <span className="brace">{'{'}</span>
            <div className="objects">
              <Object object="name" description="Alonso" comma={true} />
              <Object object="isStudent" description="true" comma={true} />
              <Object
                object="favoriteRole"
                description="Frontend"
                comma={true}
              />
              <Object
                object="focuses"
                description={['web-dev', 'design']}
                comma={true}
              />
              <Object object="favoriteFood" description="pasta" comma={true} />
              <Object
                object="hobbies"
                description={['running', 'coding']}
                comma={false}
              />
            </div>
            <span className="brace">{'}'}</span>
          </div>
        </div>
      </div>

      <div className="headerCardBgOne"></div>
      <div className="headerCardBgTwo"></div>
    </div>
  )
}

export default HeaderCard
