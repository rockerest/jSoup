// Set up the namespace
Utils.namespace( "Namespace.Storage" );

// session javascript data storage
(function( Storage, $, undefined ){
    Storage.init = function(){
        if( typeof Storage.__datastore != 'object' ){
            Storage.__datastore = {};
        }
    }

    Storage.store = function( key, value ){
        Storage.init();
        var data = Storage.retrieve();
        if( typeof data == 'undefined' ){
            data = {};
        }

        data[key] = value;
        Storage.__datastore = data;
    }

    Storage.retrieve = function( key ){
        Storage.init();
        if( typeof key == "undefined" ){
            return Storage.__datastore;
        }
        else{
            return Storage.__datastore[ key ];
        }
    }
}( Namespace.Storage = Namespace.Storage || {}, jQuery ));
