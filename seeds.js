var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");


var data = [
    {
        name: "Gimme!Coffee", 
        image: "https://fastly.4sqi.net/img/general/600x600/156271_oPMKFEK8IOXAbWsbxcdMOcyooEhYtQDVjSa3TUPNQmM.jpg",
        description: "The Cafe is inside Gates Hall of Cornell Univeristy, a perfect place for small team discussion. Ice latte with oat milk is the best in Ithaca!"
    },
    {
        name: "Blue Bottle Cafe", 
        image: "https://lh5.googleusercontent.com/p/AF1QipPICj4-JJKJCAZ3t2sgmn6KPS3tMXgUdqLWZ5GM=w408-h306-k-no",
        description: "blah blah blah"
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed cafesites!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a cafe spot");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was enought space",
                            author: "Eleanor"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
}

module.exports = seedDB;