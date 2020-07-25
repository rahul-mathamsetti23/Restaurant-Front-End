import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component{

    renderComments(comments){
        if(comments == null){
            return(
                <div>

                </div>
            );
        }

        const cmntsall = comments.map(comment =>{
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className="col-12 col-md-12 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {cmntsall}
                </ul>
            </div>
        );
    }

    renderDish(dish){
        if (dish != null) {
            return(
                
                    <Card>
                        <CardImg width="100%" top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                
            );
        }
        else {
            return(
            <div></div>
        )
    }
}k

    render(){
        const dish = this.props.dish
        if (dish == null) {
            return (
                <div></div>
                );
        }
        const dishItem = this.renderDish(dish)
        const commentItem = this.renderComments(dish.comments)
        return(
            <div className="row">
                <div class="col-12 col-md-5 m-1">
                    {dishItem}
                </div>
                <div class="col-12 col-md-5 m-1">
                    {commentItem}
                </div>
            </div>
            

        );
        
    }
}

export default Dishdetail;
