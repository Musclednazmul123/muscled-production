import { Container } from 'Styles/newsLetter.style';

export default function Newsletter() {
  return (
    <Container>
      <div className="Info">
        <h2>Sign up for our newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum
          ducimus iusto velit.
        </p>
      </div>

      <div className="input">
        <form action="#">
          <input className="input-field" type={'text'} placeholder={'Enter your email...'} />
          <input className="button" type={'submit'} value={'Notify me'} />
        </form>
        <p>We care about the protection of your data. Read our privacy policy.</p>
      </div>
    </Container>
  );
}
