
function Login() {
    return (
        <div className="col-12 centered">
            <div id='chicago' className="col-8 p-20">
                <form data-testid="form-reservation">
                    <h1 className="display-title color-dark">Sign in to your account</h1>
                    <fieldset>
                        <div className="field">
                            <label htmlFor="guests">Email</label>
                            <input type="email" required />
                        </div>
                        <div className="field">
                            <label htmlFor="guests">Password</label>
                            <input type="password" required />
                        </div>
                        <div className="field mb-20">
                            <input className='btn-rounded bg-primary-light lead-text mt-20'
                                type="submit"
                                value="Sign in"
                                aria-label="Sign in"
                                aria-pressed="false" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default Login;