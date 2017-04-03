(defproject snetwork "0.1.0-SNAPSHOT"
  :description "A suite of tools for exploring concepts
                learned by analogy over structured
                representations"
  :url "http://matthewmclure.com/similarity-network"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [org.omcljs/om "1.0.0-alpha37"]
                 [org.clojure/core.async "0.2.374"]
                 [cljs-react-material-ui "0.2.30"]
                 ;[com.stuartsierra/component "0.3.1"]
                 [Com.cemerick/piggieback "0.2.1"]
                 [figwheel-sidecar "0.5.0-6"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [spellhouse/clairvoyant "0.0-72-g15e1e44"]
                 ;[cljs-ajax "0.5.8"]
                 ]
  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-figwheel "0.5.0-6"]
            [cider/cider-nrepl "0.8.1"]]
  :min-lein-version "2.0.0"
  :uberjar-name "snetwork.jar"
  :clean-targets ^{:protect false} ["resources/public/js"]
  :source-paths ["src/cljs"]
  ;:resource-paths [""]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]
                 :init (do (use 'figwheel-sidecar.repl-api)(start-figwheel!))}
  :figwheel {:http-server-root "public" ;; default
             :server-port 3450     
             :open-file-command "wedit"
             :css-dirs ["resources/public/css"]
             :builds [{:id "dev", 
                       :source-paths ["src/cljs"],
                       :figwheel true
                       :build-options
                       {:main snetwork.core,
                        :asset-path "js/out",
                        :output-to "resources/public/js/app.js",
                        :output-dir "resources/public/js/out",
                        :source-map-timestamp true}}]}

  :cljsbuild {:builds {:dev {:source-paths ["src/cljs"]
                             :figwheel {:websocket-host "localhost"}
                             :compiler {:main snetwork.core
                                        :asset-path "js/out"
                                        :output-dir "resources/public/js/out"
                                        :output-to "resources/public/js/app.js"}}
                       :release {:source-paths ["src/cljs"]
                                 :compiler {:optimizations :advanced
                                            :output-to "release/app.js"}}}})
