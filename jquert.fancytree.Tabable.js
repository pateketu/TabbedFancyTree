; (function ($, undefined) {

    "use strict";

    /*jshint unused:false */
    
   
    $.ui.fancytree.registerExtension({
        // Every extension must be registered by a unique name.
        name: "tabable",
        // Version information should be compliant with [semver](http://semver.org)
        version: "1.0.0",

        // Extension specific options and their defaults.
        // This options will be available as `tree.options.childcounter.hideExpanded`

        options: {
        
        },

        
        treeInit: function (ctx) {
            this._super(ctx);
            this.$container.on("keyup", '.fancytree-node', function (evt) {
               
                //captures pressing enter on treeitem
                if (evt.which == 13) {
                    var node = $.ui.fancytree.getNode(evt);
                    if (node.data.href) {
                        window.location.href = node.data.href;
                    } else {
                        node.toggleExpanded();
                    }
                    
                }

            });
        },
        // Overload the `renderTitle` hook, to set the tabindex property
        nodeRenderTitle: function (ctx, title) {
            var node = ctx.node,
                span = $(node.span);
             
            // Let the base implementation render the title
            this._super(ctx, title);
            //Set the Tabindex to zero
            span.prop("tabindex", "0"); //Make  span focusable so we can tab into it
            
        },
        // Overload the `setActive` hook, so that when you using key board up and down arrow key we can move foucs
        nodeSetActive: function (ctx, flagopt, optsopt) {
            var node = ctx.node,
                span = $(node.span);
            this._super(ctx, flagopt, optsopt);
            span.focus();
        },
        // Destroy this tree instance (we only call the default implementation, so
        // this method could as well be omitted).

        treeDestroy: function (ctx) {
            this._super(ctx);
        },

       
        // End of extension definition
    });
    // End of namespace closure
}(jQuery));