# Angular In Depth (Signals Edition) — Curriculum

Signals-first, zoneless-only, standalone-only. No legacy decorator or NgModule material.
Out of scope: Router, Forms, Testing, SSR.

A few lessons carry indented notes, where the title alone doesn't say what is covered.

## Section 0 — Course Introduction and Setup

- Angular In Depth (Signals Edition) — Helicopter View
- A Tour of the Course Repository — How the Demos Are Organised
  - one folder and one page per section, each standalone, so you can start anywhere
  - shared course card and mock data for familiarity; only the HTTP, HttpClient and Services sections call the backend
- Installing Node.js and npm
- Installing the Angular CLI
- Creating our First Project with ng new
  - exploring Project Structure 
  - the v20+ naming convention — user-profile.ts holding class UserProfile, no .component file or class suffix
  - feature-based folders rather than components/ and services/, main.ts for bootstrap, tests beside the code
  - Running the Application with the Angular Dev Server
- Installing the Course Repository and the Backend REST API
- Setting Up VS IDE and the Angular Language Service
- Setting Up the Angular CLI MCP Server with ng mcp
  - The MCP Server Tools — search_documentation, get_best_practices and list_projects
  - Driving Builds and the Dev Server From the MCP Server
- Installing the Official Angular Agent Skills
  - MCP Server vs Agent Skills — Which One Does What
-  Installing and Using the Angular DevTools

## Section 1 — Introduction to Angular, with Signals From the Beginning

- Introduction to Angular — Custom HTML Elements, Model vs View
- Our First Component — Displaying Data on the Screen
- Writing our First Signal — Reading It, and Changing It with set() and update()
- What Happens When Data Is Not in a Signal — A Practical Demo
  - the Angular golden rule — all application state lives in signals
  - signals are everywhere in the framework: inputs, outputs, queries, resources and forms
  - coming up later: the full signals deep dive section
- Why Angular? The Key Features of the Framework

## Section 2 — Template Syntax Deep Dive

- Interpolation and Template Expressions — What Is and Isn't Allowed
- Property Binding vs Attribute Binding — DOM Properties Explained
  - [disabled] binds the DOM property, not the HTML attribute — Angular's default for every [x]
  - [attr.role] for an attribute with no DOM property — [role] doesn't compile, which is why attr. exists
  - toggling role between button and switch, watched in the Elements panel — the attribute updates on every change
- Class Bindings In Detail
- Style Bindings In Detail
- Event Binding and the $event Object
  - key pseudo-events — (keyup.enter), the alt / control / meta / shift modifiers, and combinations like (keyup.shift.enter)
  - global event targets — (window:resize), (document:click) and (body:...)
- Template Reference Variables In Detail
  - a reference points either to a DOM element (#title on an input) or to a component instance (#plain on plain-counter, from Section 1)
- The @let Template Variable Declaration
- Safe Navigation, Non-Null Assertion and Nullish Coalescing in Templates
- Template Type Checking — Strict Templates Explained

## Section 3 — Components Deep Dive

- Signal Inputs with input()
  - protected for members read only from the template, readonly for members Angular initializes
  - default values and why they are needed, undefined default
  - aliasing an input with { alias }
  - a required input the parent doesn't bind throws a compile error
- Input Transform Functions — built-in booleanAttribute and numberAttribute, and custom transforms
- Component Outputs with output() — Custom Events Explained
- Two-Way Binding with model() Signals
- viewChild() — Querying the Component Template
- Query Options — read and the required Variant
- viewChildren() — Querying Multiple Elements
- Component Composition Patterns
  - smart vs presentational components, and choosing between an input and a new component

## Section 4 — Built-In Control Flow

- Angular Control Flow Syntax — @if, @for, @switch
- The @if / @else if / @else Syntax In Detail
- Aliasing Expression Results with @if (expr; as value)
- The @for Block — Iterating Over Collections
- @for Contextual Variables — $index, $first, $last, $even, $odd, $count
- Understanding @for Tracking Functions and Why track Is Mandatory
  - the rendered text looks the same whichever track you use, but the DOM underneath doesn't: tick a checkbox, prepend an item, and the tick stays on its item with track item.id but jumps to the new top row with track $index, because Angular reuses DOM elements by position
- The @empty Block — Handling Empty Collections
- The @switch, @case and @default Blocks
- Control Flow and Signals — How Blocks React to State Changes
- How @for Diffing Works Under the Hood

## Section 5 — Component Styling and View Encapsulation

- Component Styles — Section Introduction
- Angular View Encapsulation Under the Hood
- The :host Selector In Detail
  - :host lets a component style its own tag (<host-box>), which its CSS otherwise can't reach because the tag sits in the parent's template
  - used to make the component a block, give it padding and a border without a wrapper div, and restyle it when the parent adds a class or attribute, like :host(.active)
- The :host-context Selector — The Theming Use Case
- Bypassing View Encapsulation with ::ng-deep
- Global Styles vs Component Styles — Best Practices
- provideCssVarNamespacing() — every CSS variable in component styles gets one prefix per app, so apps sharing a page (micro-frontends, embedded Angular Elements) can't collide, with --global--foo to opt one out

## Section 6 — Angular Signals Deep Dive

- Signals Deep Dive — Section Introduction
- Signals with Objects and Arrays — Why We Never Mutate
  - a mutated object keeps the same reference, so the signal never notifies and the view doesn't update
- Derived State with computed() In Detail
  - a computed() only reruns when it is read and one of its dependencies changed, and caches the result in between
- linkedSignal() — Writable State Derived From Other State
- linkedSignal() with the source / computation Form
- The effect() API — When To Use Effects
  - an effect is created in a constructor or field initializer, and destroyed with its component
  - the docs' own example is a console.log of a signal: an effect is just a way to get notified each time a signal's value changes
- When Not To Use Effects — Common Mistakes
  - an effect that sets another signal re-implements computed() by hand: the copy is stale until the effect runs, it is writable so it can drift from its source, and each write costs an extra change detection pass
- How Dependencies Between Signals Are Created and Destroyed
  - what counts as a reactive context — computed(), linkedSignal(), effect() and template rendering
  - tracking is synchronous only — a signal read after an await is never tracked, which is why effects silently stop reacting
  - debugName on signal(), computed(), effect() and linkedSignal() — what labels the nodes in the DevTools signal graph
- Custom Equality Functions with the equal Option
  - it's just a rarely needed optimization
- Breaking Dependencies with untracked()
  - read the current signal value, but don't make the signal become a dependency
- Effect Cleanup Functions
  - destroying an effect by hand through its EffectRef, for the rare effect that must stop before its component

## Section 7 — HTTP with Signals

- HTTP with Signals — Section Introduction
- Running the Backend and Exploring Its API
- The resource() API — Async State as Signals
  - params and loader, with a fetch() loader against the course backend
- resource() Status, Value, Error and Reloading
- httpResource() — Declarative HTTP as a Signal
  - the same API as resource(), with the request going through HttpClient and its interceptors, which is why real apps use it rather than fetch()
  - HttpClient is provided in root, so no provideHttpClient() is needed to start using it
- httpResource() Request Objects and Response Parsing
  - method accepts verbs other than GET, but only for non-standard APIs that don't do reads via GET, like a search that takes its query as a POST body; writes still go through HttpClient
- debounced() — Time-Based Derived State
  - a source signal plus a wait duration, or a custom () => Promise<void>
  - it returns a Resource: the 'loading' status while the timer runs, and why the last resolved value is retained
  - source errors going straight to 'error' without starting a timer, and the equal option

## Section 8 — The HttpClient

- The HttpClient — Section Introduction
  - the Observable-based client underneath httpResource(), and the only way to write data today
  - choosing between them: httpResource() for HTTP reads, resource() for reads from any other async source, HttpClient for writes and imperative calls like uploads
  - each call is converted straight to a Promise with firstValueFrom() and awaited; only streams subscribe (the event stream, uploads), and interceptors pipe() the response; the RxJS section covers the rest
- Calling HttpClient Directly — GET, POST, PUT, PATCH and DELETE
- Error Handling Strategies for HTTP Calls
  - errors from HttpClient calls, handled where the call is made
- Uploading Files with Progress
  - observe: 'body' (the default) | 'response' | 'events'; 'response' only for a header or status from a successful call
  - the HTTP event stream: HttpEventType, HttpStatusCode, HttpSentEvent and HttpUserEvent
  - posting a file as FormData, with reportUploadProgress and reportDownloadProgress turning on progress events
  - upload progress needs provideHttpClient(withXhr()), since the default fetch backend can't report it
  - exposing progress and errors as signals, and cancelling the upload by unsubscribing
- Functional HTTP Interceptors Explained
  - registered with provideHttpClient(withInterceptors([...])) — the provider is only needed to configure HttpClient
  - interceptors run for httpResource() requests too, since it is built on HttpClient
  - handling HTTP errors in one place, for every call
  - HttpContext and HttpContextToken — per-request metadata, so a call site can configure the interceptor that will handle it

## Section 9 — Services

- Services — Section Introduction
  - a service holds code that more than one component needs: stateless data access, or stateful shared state
- Creating a Service with @Service() and inject()
  - @Service() is the default for new singletons; the DI deep dive covers @Injectable and providers
- A Stateless Service — Moving the HTTP Calls Into a CoursesService
  - the fetching code from the HTTP sections is duplicated in every component that needs it; the service makes it reusable
  - the service holds no state: courseResource() creates an httpResource() owned by the calling component
  - it must be called in an injection context, like a field initializer, since httpResource() needs one
  - writing through the service, then reloading the component's resource
- A Stateful Service — an Auth Service Shared Across Components
  - the service owns writable state and exposes it read-only with asReadonly(), with the mutation methods next to it
  - asReadonly() stops set() and update(), it does not stop deep mutation of the value
  - two components injecting the same singleton see the same state

## Section 10 — Security

- Angular Security — Section Introduction
- How Angular Protects You By Default — Sanitization and the Security Contexts
  - the SecurityContext enum and the Sanitizer class underneath DomSanitizer
- Binding HTML with [innerHTML] — What Angular Strips, and Why
- DomSanitizer and the bypassSecurityTrust* Methods
  - the narrow cases where bypassing is correct, and how to keep the bypass close to the value
- Content Security Policy in an Angular Application
  - CSP_NONCE — the token Angular uses to nonce the styles it injects
- Trusted Types Support Explained
- XSRF / CSRF Protection with the HTTP Client
  - withXsrfConfiguration() and withNoXsrfProtection(), HttpXsrfTokenExtractor, and the cookie/header convention behind them
- Security Best Practices — A Practical Checklist

## Section 11 — Attribute Directives and Directive Composition

- Introduction to Angular Attribute Directives
- Host Bindings In Detail — DOM Properties vs Attributes
- Host Listeners — Handling Events in Directives
  - the global event targets from event binding, (window:resize) and (document:click), work in host too
- Directives with Signal Inputs and Outputs
- The exportAs Syntax — When To Use It and Why
- Directive Composition with hostDirectives
  - Angular guarantees no ordering of a lifecycle hook between a component and the directives on its element

## Section 12 — Pipes Deep Dive

- Pipes — Section Introduction
  - why pipes exist: a template can only call its own component's members, so a pipe is how a reusable function gets into any template through imports
  - pipes inject what they need, like LOCALE_ID, and pure pipes only re-run when their input changes
  - chaining pipes, left to right: text | slice:0:7 | uppercase
- Angular Built-In Pipes — Complete Catalog
- The Date, Currency, Decimal and Percent Pipes In Detail
- Locale Data and LOCALE_ID — Making the Pipes Work Outside en-US
  - only en-US locale data ships by default, and registerLocaleData() is what fixes the runtime error
  - the getLocale* family — getLocaleDateFormat, getLocaleCurrencyCode, getLocaleDirection
- The JSON, Slice, KeyValue and Case Pipes
- Configuring Built-In Pipes Through DI
  - DATE_PIPE_DEFAULT_OPTIONS, DATE_PIPE_DEFAULT_TIMEZONE and DEFAULT_CURRENCY_CODE
- Custom Pipes — Step-by-Step Implementation
- Pure vs Impure Pipes In Detail
- Formatting Data Outside the Template — formatDate, formatNumber, formatCurrency and formatPercent

## Section 13 — Content Projection and Content Queries

- Content Projection with ng-content In Detail
- Multi-Slot Projection with the select Attribute
- Default Fallback Content for ng-content
- Projecting Content with ngProjectAs
- contentChild() — Querying Projected Content
- contentChildren() In Detail
- How Deep Can We Query? Understanding Query Boundaries
- Building a Component That Coordinates Its Children
  - a parent that queries its projected children and drives their state — tabs / accordion style

## Section 14 — Advanced Templates and Structural Directives

- Angular Templates Introduction with ng-template
  - ng-container — grouping without extra DOM elements
- Rendering Templates with ngTemplateOutlet and Passing Context Data
- Templates as Component Inputs — Building a Customizable Component
  - a default rendering the consumer can override with its own template
  - never put <ng-content> inside @if, @for or @switch — Angular instantiates the projected content either way; project an ng-template instead
- TemplateRef and ViewContainerRef Explained
- Structural Directives — the Star Syntax and a Simple Custom Directive
  - the built-in control flow replaced *ngIf and *ngFor, so custom structural directives are now rare
  - role-based rendering with *myAllowRole: unlike a [hidden] attribute directive, denied content is never created

## Section 15 — Dependency Injection Deep Dive

- Introduction to the Angular Dependency Injection System
- @Service vs @Injectable and Tree-Shakeable Providers
  - @Service() for new singletons, @Injectable when you need explicit providers or non-root scoping
  - providedIn: 'root' and why an unused service is dropped from the bundle
- Providers and Injection Tokens — InjectionToken<T>
  - inject(TOKEN, { optional: true }) returns null instead of throwing when nothing provides the token
- useClass, useValue, useExisting and useFactory Providers
- Multi Providers and Provider Arrays
- The provideX() Convention, ApplicationConfig and Bootstrapping
  - the provideX() function convention, and why the framework moved to it
  - environment initializers and provideAppInitializer
- Hierarchical Injection — Component-Scoped Services and the Master-Detail Pattern
  - element injectors vs environment injectors, and component-level providers
  - a store provided by a master-detail shell: the list and the detail share one instance, and it is destroyed with the shell
  - @Service({ autoProvided: false }) so the store can only exist where a component provides it
  - with the router, the same scoping comes from providers on a parent route
- providers vs viewProviders — What Projected Content Can and Cannot See
  - projected content can inject from the receiving component's providers, but not from its viewProviders, which only its own template sees
- The optional, self, skipSelf and host Injection Options
- inject() and Injection Contexts — Where inject() Is Legal and Why
  - field initializers, constructors and provider factories; NG0203 everywhere else, including ngOnInit and anything after an await
  - the escape hatches — capturing Injector for injector.get(), runInInjectionContext() for callbacks, assertInInjectionContext() in your own helpers
- Debugging Dependency Injection — Error Codes and the DevTools Injector Tree
  - reading a NullInjectorError dependency path, plus NG0200, NG0203, NG0204, NG0205 and NG0207

## Section 16 — Deferred Loading and Error Boundaries

- @defer — Section Introduction
- How Does @defer Work Under the Hood?
  - the deferred dependencies go into a separate lazy chunk, which is why they must be standalone and not referenced elsewhere
- The @placeholder, @loading and @error Blocks — with the after and minimum Parameters
- Triggers — idle, immediate, timer, viewport, interaction and hover
- Prefetching and Custom Triggers with when
- @defer Best Practices and Bundle Size Analysis
- Error Boundaries with @boundary and @error
  - wrapping a subtree so a render-time error swaps in fallback content instead of taking the page down, with the error bound in @error
  - $reset re-renders the subtree once the cause is fixed
  - why local boundaries around what you can afford to lose beat a single one at the root
  - what it catches — synchronous exceptions during rendering, not async failures like a raw subscribe(); an errored resource.value() read in a template does throw during render
  - developer preview as of v22.2

## Section 17 — Lifecycle and Render Hooks

- Component Lifecycle in a Signals Application — Complete Overview
  - the hooks that survive but rarely earn their keep — ngAfterViewInit, ngAfterContentInit, ngDoCheck and the *Checked variants
  - ExpressionChangedAfterItHasBeenCheckedError — still thrown in dev mode when those hooks write state
  - signal inputs and computed() replace ngOnChanges
- ngOnInit, ngOnDestroy and DestroyRef — What Still Needs a Hook
  - most ngOnInit work moves to field initializers, the constructor or computed()
  - inject(DestroyRef).onDestroy() replaces ngOnDestroy, and works in services and helper functions too
- afterNextRender() and afterEveryRender()
  - the render phases — earlyRead, write, mixedReadWrite and read, why they run in that order, and how each phase's return value is passed to the next
  - avoiding layout thrashing, plus AfterRenderRef and the manualCleanup option
- afterRenderEffect() — Reactive DOM Work After Render
  - the phases from the previous lesson, with each phase's value handed to the next as a signal
- Interacting with Third-Party DOM Libraries the Right Way
  - nativeElement inside afterNextRender() is the right tool in a browser-only app
  - Renderer2 — createElement, setAttribute, addClass, setStyle and listen() — only when the code must also run outside the browser, like SSR

## Section 18 — Internationalization (i18n)

- Introduction to Angular Internationalization
  - translations are compiled in: one build per locale, and switching language means loading a different build
  - runtime translation libraries are the alternative when the language must change without a reload
  - adding @angular/localize to a project
- Marking Text for Translation
  - text in elements and attributes, and strings in TypeScript
  - meaning, description and custom ids give translators context and keep ids stable
- Plural and Select ICU Expressions, Including Nesting
- The I18nPluralPipe and I18nSelectPipe — Plural and Select at Runtime, Without Translation Files
- Extracting Translations and Translating the File
  - the supported file formats
- Configuring, Building and Serving Each Locale
  - each locale build sets LOCALE_ID, so the pipes format for that locale
  - what happens to missing translations
- Deploying a Translated Application
  - one output folder per locale, each with its own base href, and switching language by URL

## Section 19 — RxJS Interoperability

- Signals vs Observables — When To Use Which
  - a signal always has a current value; an observable is a stream of events over time
  - state belongs in signals; RxJS earns its place for timing, cancellation and combining events
  - the async pipe still works, but toSignal() replaces it in a signals-first app
- toSignal() and toObservable() — Bridging Both Worlds
  - toSignal() subscribes for you and unsubscribes on destroy; initialValue, or requireSync for synchronous sources like a BehaviorSubject
  - toObservable() emits the latest value after change detection, so synchronous sets in a row are coalesced
  - round-tripping through toObservable() to use an operator signals lack, like pairwise()
- rxResource() — Resources Backed by Observables
  - stream returns an observable, which can emit more than once
  - a params change unsubscribes from the previous stream
  - for single HTTP requests use httpResource(); rxResource() is for sources that emit more than once
- Event Streams — Where RxJS Still Wins
  - a plain search no longer needs RxJS: debounced() and httpResource() already debounce and cancel stale requests
  - choosing a flattening operator: switchMap, concatMap, mergeMap and exhaustMap
- takeUntilDestroyed() and Manual Subscriptions
  - when a manual subscribe() is still needed, and cleaning it up with takeUntilDestroyed() or DestroyRef
  - outputFromObservable() and outputToObservable() for streams at the component boundary

## Section 20 — Conclusion

- Course Conclusion and Key Takeaways
  - signals are the single model for state: writable state, derived state, async state and effects all use the same primitives
  - templates stay declarative: control flow, bindings and pipes describe what to show, and the framework works out when to update
  - components communicate through a small, explicit API of inputs, outputs and two-way bindings
  - services hold code that more than one component needs: stateless data access or stateful shared state, scoped as wide or narrow as the feature
  - reads are declarative and reactive, writes are imperative and explicit
  - composition over inheritance: projection, templates, directives and host directives build flexible components from small parts
  - load only what is needed, and contain what can fail, so one broken or slow part never takes the page down
  - security is on by default; bypassing it is a deliberate, local decision
