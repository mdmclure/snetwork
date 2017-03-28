(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [snetwork.core]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3450/figwheel-ws"})

