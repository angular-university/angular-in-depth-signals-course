# Angular In Depth (Signals Edition) — Curriculum

Signals-first, zoneless-only, standalone-only. No legacy decorator or NgModule material.
Out of scope: Router, Forms, Testing, SSR.

A few lessons carry indented notes, where the title alone doesn't say what is covered.

## Section 0 — Course Introduction and Setup

- Angular In Depth (Signals Edition) — Helicopter View
- A Tour of the Course Repository — How the Demos Are Organised
  - one folder and one page per section, each standalone, so you can start anywhere
  - shared course card and mock data for familiarity; only the HTTP section calls the backend
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
  - if the app enables provideCssVarNamespacing, setProperty('--foo') and getPropertyValue('--foo') silently stop matching the compiled names
  - CssVarNamespacer.namespace('--foo') is the fix, and it returns the name unchanged when no namespace is configured

## Section 6 — Angular Signals Deep Dive

- Signals Deep Dive — Section Introduction
- How Signals Work Under the Hood — The Reactive Graph
  - debugName on signal(), computed(), effect(), linkedSignal(), input() and the resources — what labels the nodes in the DevTools signal graph
- What Actually Triggers a Re-Render — Zoneless and OnPush by Default
  - the complete notification list: a template signal read changing, a bound template or host listener, ChangeDetectorRef.markForCheck() (which the async pipe calls for you), ComponentRef.setInput(), attaching a view already marked dirty
  - OnPush as the v22 default, and what ChangeDetectionStrategy.Eager is when you meet it in code
  - provideCheckNoChangesConfig({exhaustive, interval}) — catching a binding that changed without notifying Angular
- Signals with Objects and Arrays — Why We Never Mutate
- Read-Only Signals — Signal<T> vs WritableSignal<T>
  - asReadonly() stops set() and update(), it does not stop deep mutation of the value
  - isSignal() and isWritableSignal() for narrowing an unknown value
- Derived State with computed() In Detail
- How Dependencies Between Signals Are Created and Destroyed
  - what counts as a reactive context — computed(), linkedSignal(), effect(), afterRenderEffect(), resource() params and loader, and template rendering including host bindings
  - tracking is synchronous only — a signal read after an await is never tracked, which is why loaders and effects silently stop reacting
- Lazy Evaluation, Memoization and Glitch-Free Propagation
- Custom Equality Functions with the equal Option
- Breaking Dependencies with untracked()
- The effect() API — When To Use Effects
- When Not To Use Effects — Common Mistakes
- Effect Cleanup Functions
- Manually Destroying an Effect
- Injection Contexts, DestroyRef and Automatic Cleanup
  - DestroyRef.destroyed — guarding async callbacks that resolve after the component is gone
- linkedSignal() — Writable State Derived From Other State
- linkedSignal() with the source / computation Form
- The set Option — Intercepting Writes and Writing Back
  - set replaces the write path: rawSet is the only call that actually writes, so not calling it vetoes the write
  - normalizing on the way in by calling rawSet with a different value, and propagating the write upstream
  - update() is rewritten in terms of set, and the linked computation still resets the value without routing through it
- debounced() — Time-Based Derived State
  - a source signal plus a wait duration, or a custom () => Promise<void>
  - the 'loading' status while the timer runs, and why the last resolved value is retained
  - source errors going straight to 'error' without starting a timer, and the equal option
- Signal-Based Data Services — Design Patterns
  - a service that owns writable state and exposes it read-only, with the mutation methods next to it
- Sharing Signal State Across Components
- Signal Anti-Patterns and How To Avoid Them
  - effects that write state, mutating objects in place, exposing a WritableSignal from a service

## Section 7 — HTTP and Asynchronous Data

- The Angular HTTP Client — Section Introduction
- Setting Up provideHttpClient and the Development Backend
- HTTP GET Calls with Request Parameters and Headers
  - HttpParams encoding — HttpParameterCodec and HttpUrlEncodingCodec, for APIs whose encoding doesn't match Angular's default
- HTTP POST, PUT, PATCH and DELETE In Detail
- Custom Data Services with @Service — Fetching and Modifying Data
  - @Service() is the default for new singletons; the DI deep dive covers @Injectable and providers
- Functional HTTP Interceptors Explained
  - HttpContext and HttpContextToken — per-request metadata, so a call site can configure the interceptor that will handle it
- Error Handling Strategies for HTTP Calls
- The resource() API — Async State as Signals
- resource() Status, Value, Error and Reloading
- httpResource() — Declarative HTTP as a Signal
- httpResource() Request Objects and Response Parsing
- Request Cancellation and Race Conditions Explained
- Optimistic Updates with resource() and linkedSignal()
- The observe Option and the HTTP Event Stream
  - observe: 'body' | 'response' | 'events', and HttpResponse / HttpHeaderResponse
  - HttpEventType, HttpStatusCode, HttpSentEvent and HttpUserEvent — the prerequisite for progress events
- Uploading Files with the HTTP Client
- Upload and Download Progress — reportUploadProgress and reportDownloadProgress
- A File Upload Driven by resource() — Progress, Errors and Cancellation as Signals
- Choosing Between resource(), httpResource() and a Manual Service

## Section 8 — Security

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

## Section 9 — Attribute Directives and Directive Composition

- Introduction to Angular Attribute Directives
- Host Bindings In Detail — DOM Properties vs Attributes
- Host Listeners — Handling Events in Directives
  - global event targets on the host — (window:resize), (document:click)
- Directives with Signal Inputs and Outputs
- The exportAs Syntax — When To Use It and Why
- Directive Composition with hostDirectives
  - Angular guarantees no ordering of a lifecycle hook between a component and the directives on its element

## Section 10 — Pipes Deep Dive

- Angular Built-In Pipes — Complete Catalog
  - including I18nPluralPipe and I18nSelectPipe
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
- Pipes vs computed() — Choosing the Right Tool

## Section 11 — Content Projection and Content Queries

- Content Projection with ng-content In Detail
- Multi-Slot Projection with the select Attribute
- Default Fallback Content for ng-content
- Projecting Content with ngProjectAs
- Projected Content Belongs to the Parent — Ownership, Change Detection and Injection
  - projected content is checked with the parent, so an OnPush wrapper does not protect it
  - it resolves dependencies against the declaring component's injector, not the receiving component's
  - never put <ng-content> inside @if, @for or @switch — Angular instantiates it either way; use a template fragment
- contentChild() — Querying Projected Content
- contentChildren() In Detail
- How Deep Can We Query? Understanding Query Boundaries
- Building a Component That Coordinates Its Children
  - a parent that queries its projected children and drives their state — tabs / accordion style

## Section 12 — Advanced Templates and Structural Directives

- Angular Templates Introduction with ng-template
- Template Instantiation with ngTemplateOutlet
- Passing Context Data to Templates
- ng-container — Grouping Without Extra DOM Elements
- Templates as Component Inputs — Building Customizable Components
- TemplateRef and ViewContainerRef Explained
- Structural Directives — Understanding the Star Syntax
- Structural Directives — Step-by-Step Implementation
- Structural Directive Type Guards and Template Type Checking
- Building a Reusable Component API — A Practical Example
  - projection, templates and inputs combined so consumers can override any part of the rendering

## Section 13 — Dependency Injection Deep Dive

- Introduction to the Angular Dependency Injection System
- Custom Services — @Service vs @Injectable
  - @Service() for new singletons, @Injectable when you need explicit providers or non-root scoping
- The inject() Function In Detail
- Understanding Providers and Injection Tokens
- Simplified Provider Configuration Explained
  - the provideX() function convention, and why the framework moved to it
- useClass, useValue, useExisting and useFactory Providers
- Tree-Shakeable Providers and providedIn: 'root'
- Injection Tokens In Detail — InjectionToken<T>
- Understanding Hierarchical Dependency Injection
- Element Injectors vs Environment Injectors
- Component-Level Providers and Service Instance Scoping
- providers vs viewProviders — What Projected Content Can and Cannot See
- The optional, self, skipSelf and host Injection Options
- Injection Contexts In Detail — Where inject() Is Legal and Why
  - field initializers, constructors and provider factories; NG0203 everywhere else, including ngOnInit and anything after an await
  - the escape hatches — capturing Injector for injector.get(), runInInjectionContext() for callbacks, assertInInjectionContext() in your own helpers
- Debugging Dependency Injection — Error Codes and the DevTools Injector Tree
  - reading a NullInjectorError dependency path, plus NG0200, NG0203, NG0204, NG0205 and NG0207
- Multi Providers and Provider Arrays
- Application Bootstrapping and ApplicationConfig
- Environment Initializers and provideAppInitializer

## Section 14 — Deferred Loading and Error Boundaries

- @defer — Section Introduction
- How Does @defer Work Under the Hood?
- The @placeholder Block and the minimum Parameter
- The @loading Block — after and minimum Parameters
- The @error Block — Handling Failed Chunk Loads
- The idle and immediate Triggers
- The timer Trigger and Prefetch Triggers
- The viewport Trigger In Detail
- The interaction and hover Triggers
- Custom Triggers with the when Clause
- @defer Best Practices and Bundle Size Analysis
- Error Boundaries with @boundary and @error
  - wrapping a subtree so a render-time error swaps in fallback content instead of taking the page down, with the error bound in @error
  - why local boundaries around what you can afford to lose beat a single one at the root
  - what it catches — synchronous exceptions during rendering, not async failures like a raw subscribe(); an errored resource.value() read in a template does throw during render
  - developer preview as of v22.2

## Section 15 — Lifecycle and Render Hooks

- Component Lifecycle in a Signals Application — Complete Overview
  - the hooks that survive but rarely earn their keep — ngAfterViewInit, ngAfterContentInit, ngDoCheck and the *Checked variants
  - ExpressionChangedAfterItHasBeenCheckedError — still thrown in dev mode when those hooks write state
- ngOnInit and ngOnDestroy In Detail
- Why Signal Inputs and computed() Replace ngOnChanges
- afterNextRender() and afterEveryRender()
  - the render phases — earlyRead, write, mixedReadWrite and read, why they run in that order, and how each phase's return value is passed to the next
  - avoiding layout thrashing, plus AfterRenderRef and the manualCleanup option
- afterRenderEffect() — Reactive DOM Work After Render
  - the same phases, with each phase's value handed to the next as a signal
- Interacting with Third-Party DOM Libraries the Right Way
  - Renderer2 — createElement, setAttribute, addClass, setStyle and listen(), and when nativeElement is fine instead

## Section 16 — Internationalization (i18n)

- Introduction to Angular Internationalization
- Understanding i18n Unique Identifiers
- i18n Pluralization Support
- i18n Alternative Expressions (select) Support
- i18n in Attributes and the $localize API
- Extracting and Merging Translation Files
- Running a Translated Application with the Angular CLI

## Section 17 — RxJS Interoperability

- Observables — A Practical Introduction for Angular Developers
- Signals vs Observables — When To Use Which
- The Async Pipe — Passing Observable Data to the View
- toSignal() — Consuming Observables as Signals
- toObservable() — Converting Signals Back Into Streams
- rxResource() — RxJS-Based Async Resources
- outputFromObservable() and outputToObservable()
- takeUntilDestroyed() and Subscription Management
- Event Streams — The Use Cases Where RxJS Still Wins

## Section 18 — Conclusion

- Course Conclusion and Key Takeaways
