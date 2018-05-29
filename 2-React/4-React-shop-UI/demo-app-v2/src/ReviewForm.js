import React, { Component } from 'react';

class ReviewForm extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-8">
                        <div className="card">
                            <div className="card-header">Review Form </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>stars</label>
                                        <select className="form-control"></select>
                                    </div>
                                    <div className="form-group">
                                        <label>author</label>
                                        <input className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>body</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                    <button className="btn btn-primary">submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewForm;
