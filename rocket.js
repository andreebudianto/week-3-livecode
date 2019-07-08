function pyramidNumberExtension(max) {
    for(a=-max;max>=a;max--) {
        var max1 = max;
        
        if(max1>0) {
            var display = '';
            for(b=0;max1>b; max1--) {
                display = display + max;
            } 
        } else if(max1<-1) {
            var display = '';
            for(c=0;c>max1;c--) {
                display = display + (-max);
            }
        } else {
            continue;
        }
        console.log(display);
    }
}

pyramidNumberExtension(5)
