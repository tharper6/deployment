import * as React from 'react';
import { timingSafeEqual } from 'crypto';

class Contact extends React.Component<IContactProps, IContactState> {

    constructor(props: IContactProps) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            messages: ''
        };
    }

    onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await fetch ('/api/contact', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(this.state)
            })
            this.setState({
                email: '',
                subject: '',
                messages: ''
            })
        } catch (error) {
            throw error;
        }
    }

    render() {
        return (
            <main className="container my-5">
                <form className="form-group mt-5 border border-info rounded p-3 shadow-lg bg-secondary" onSubmit={this.onSubmit} >
                    <label>Email:</label>
                    <input type="text" className="input-group my-1 p-1" value={this.state.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} />
                    <label>Subject:</label>
                    <input type="text" className="input-group my-1 p-1" value={this.state.subject} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ subject: e.target.value })} />
                    <label>Messages:</label>
                    <input type="text" className="input-group my-1 p-1" value={this.state.messages} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ messages: e.target.value })} />
                    <button className="form-control btn btn-light mt-2">Submit</button>
                </form>
            </main>
        )
    }
}

export interface IContactProps { }

export interface IContactState {
    email: string,
    subject: string,
    messages: string
}

export default Contact;