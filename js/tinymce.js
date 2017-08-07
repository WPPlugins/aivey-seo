/** 
 * Adds SEO events to the WordPress post TinyMCE visual editor. Uses functions
 * from the edit.js file.
 */

jQuery(document).ready(function($){
    tinymce.PluginManager.add('keyup_event', function(editor, url) {
        editor.on('keyup', function(e) {
            console.log("Visual editor changed");
            $.checkContent();
        });
        
        editor.on('change', function(e) {
            if (tinymce && null == tinymce.activeEditor) {
                console.log("Visual editor changed (no active editor)");
                $.checkContent($('#content-textarea-clone').text());
                $.refreshErrors();
            } else {
                console.log("Visual editor changed (active editor): " + tinymce.activeEditor.getContent());
                $.checkContent(tinymce.activeEditor.getContent());
                $.refreshErrors();
            }  
        }); 
    });
});
